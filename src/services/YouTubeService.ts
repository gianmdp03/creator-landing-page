import { google } from "googleapis";
import { unstable_cache } from "next/cache";
import { YouTubeVideo } from "@/types/YouTubeVideo";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const youtubeData = google.youtube({ version: "v3", auth: oauth2Client });
const youtubeAnalytics = google.youtubeAnalytics({
  version: "v2",
  auth: oauth2Client,
});

const CACHE_TTL = 43200; // 12 horas

const getSubscribers = unstable_cache(
  async (): Promise<string> => {
    try {
      const res = await youtubeData.channels.list({
        mine: true,
        part: ["statistics"],
      });
      return res.data.items?.[0]?.statistics?.subscriberCount || "N/A";
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      return "N/A";
    }
  },
  ["yt-subscribers"],
  { revalidate: CACHE_TTL },
);

const getMonthlyViews = unstable_cache(
  async (): Promise<string> => {
    try {
      const today = new Date().toISOString().split("T")[0];
      const lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

      const res = await youtubeAnalytics.reports.query({
        ids: "channel==MINE",
        startDate: lastMonth,
        endDate: today,
        metrics: "views",
      });
      return res.data.rows?.[0]?.[0]?.toString() || "N/A";
    } catch (error) {
      console.error("Error fetching monthly views:", error);
      return "N/A";
    }
  },
  ["yt-monthly-views"],
  { revalidate: CACHE_TTL },
);

const getTopVideos = unstable_cache(
  async (): Promise<YouTubeVideo[]> => {
    try {
      const searchRes = await youtubeData.search.list({
        forMine: true,
        type: ["video"],
        order: "viewCount",
        part: ["snippet"],
        maxResults: 12,
      });

      const items = searchRes.data.items;

      if (!items?.length) return [];

      const videoIds = items
        .map((item) => item.id?.videoId)
        .filter(Boolean) as string[];

      const videosRes = await youtubeData.videos.list({
        id: videoIds,
        part: ["contentDetails", "statistics"],
      });

      const validVideos =
        videosRes.data.items?.filter((video) => {
          const duration = video.contentDetails?.duration;

          if (!duration) return false;

          const match = duration.match(
            /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/
          );

          const hours = Number(match?.[1] || 0);
          const minutes = Number(match?.[2] || 0);
          const seconds = Number(match?.[3] || 0);

          const totalSeconds =
            hours * 3600 + minutes * 60 + seconds;

          return totalSeconds > 60;
        }) || [];

      const videoStatsMap = new Map(
        validVideos.map((video) => [
          video.id,
          {
            views: video.statistics?.viewCount || "0",
          },
        ])
      );

      return items
        .filter((item) =>
          videoStatsMap.has(item.id?.videoId || "")
        )
        .slice(0, 4)
        .map((item) => ({
          id: item.id?.videoId || "",
          title: item.snippet?.title || "Video sin título",
          views:
            videoStatsMap.get(item.id?.videoId || "")?.views || "0",
        }));
    } catch (error) {
      console.error("Error fetching top videos:", error);
      return [];
    }
  },
  ["yt-top-videos"],
  { revalidate: CACHE_TTL }
);

export const YouTubeService = {
  getSubscribers,
  getMonthlyViews,
  getTopVideos,
};
