"use client";
import { useState } from "react";
import { Play, X } from "lucide-react";

interface KnowVideoProps {
    title: string;
    videoId: string;
}

export default function KnowPrrayasha() {
    const [activeVideo, setActiveVideo] = useState<KnowVideoProps | null>(null);

    const videos = [
        {
            title: "Prrayasha Video 1",
            videoId: "UYOnKcphwEQ"
        },
        {
            title: "Prrayasha Video 2",
            videoId: "o1UXKZnzyKQ"
        },
        {
            title: "Prrayasha Video 3",
            videoId: "mmsz7pzfKZE"
        },
        {
            title: "Prrayasha Video 4",
            videoId: "zgTgJY_IJN4"
        }
    ];

    return (
        <section className="know-prrayasha-section">
            <div className="section-container">
                <div className="brand-styles-header">
                    <span className="section-label">Behind The Brand</span>
                    <h2 className="brand-styles-title">Know Prrayasha Collections</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="know-grid">
                    {videos.map((video, index) => (
                        <button
                            key={index}
                            type="button"
                            className="know-video-card know-video-trigger"
                            onClick={() => setActiveVideo(video)}
                            aria-label={`Play ${video.title}`}
                        >
                            <div className="know-video-thumb">
                                <img
                                    src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                                    alt={video.title}
                                />
                                <span className="know-video-play-small">
                                    <Play size={14} fill="currentColor" />
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {activeVideo && (
                <div className="know-video-modal" onClick={() => setActiveVideo(null)}>
                    <div className="know-video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="know-video-close"
                            onClick={() => setActiveVideo(null)}
                            aria-label="Close video"
                        >
                            <X size={18} />
                        </button>
                        <div className="know-video-embed">
                            <iframe
                                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1`}
                                title={activeVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="know-video-iframe"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
