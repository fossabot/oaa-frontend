<script setup lang="ts"></script>

<template>
    <div class="home">
        <div class="bg-grid" aria-hidden="true"></div>
        <div class="bg-blobs" aria-hidden="true">
            <span class="blob-a"></span>
            <span class="blob-b"></span>
            <span class="blob-c"></span>
            <span class="blob-d"></span>
        </div>
        <main>
            <div class="sec-first">
                <div class="left">
                    <h1>Let's</h1>
                    <h1>
                        <span class="accent">Build</span>
                        <span> Here</span>
                        <span class="cursor"></span>
                    </h1>
                    <div class="links">
                        <span>
                            <a href="https://github.com/suse-edu-cn" target="_blank" rel="noopener noreferrer">
                                关注 GitHub
                                <i class="pi pi-arrow-up-right"></i>
                            </a>
                        </span>
                        <span>
                            <a
                                href="https://github.com/suse-edu-cn/suse-oaa-app/releases"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                获取青蟹 App
                                <i class="pi pi-arrow-up-right"></i>
                            </a>
                        </span>
                    </div>
                </div>
                <div class="right">
                    <p>欢迎加入四川轻化工大学开放原子开源协会</p>
                </div>
            </div>
        </main>
    </div>
</template>

<style lang="less" scoped>
.home {
    --section-display: row;
    --section-justify: flex-start;
    --section-align: center;
    --section-first-height: 66vh;
    --section-first-margin: 4vh;
    --title-font-size: 80px;
    --title-cursor-height: 10px;
    --title-min-width: 600px;
}

// 网格背景
.bg-grid {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: calc(3.75rem + var(--section-first-margin) * 4 + var(--section-first-height));
    background-image:
        linear-gradient(to bottom, rgba(255, 255, 255, 0) 85%, #fff 99%),
        linear-gradient(to right, rgba(24, 24, 27, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(24, 24, 27, 0.05) 1px, transparent 1px);
    background-size:
        auto,
        60px 60px,
        60px 60px;
    pointer-events: none;
}

// 主题色填充
// 大尺寸色块经 filter 形成柔和色场随网格一同向底部淡出
.bg-blobs {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: calc(3.75rem + var(--section-first-margin) * 2 + var(--section-first-height));
    overflow: hidden;
    pointer-events: none;

    span {
        position: absolute;
        border-radius: 50%;
        filter: blur(96px);
    }

    .blob-a {
        top: 10%;
        left: 0;
        width: min(640px, 72vw);
        height: min(480px, 56vw);
        background: var(--p-emerald-400);
        opacity: 0.15;
    }

    .blob-b {
        top: -12%;
        right: 0;
        width: min(480px, 64vw);
        height: min(400px, 52vw);
        background: var(--p-teal-300);
        opacity: 0.25;
    }

    .blob-c {
        top: 50%;
        left: 33%;
        width: min(440px, 50vw);
        height: min(280px, 35vw);
        background: var(--p-teal-300);
        opacity: 0.15;
    }

    .blob-d {
        bottom: 2%;
        right: 13%;
        width: min(580px, 70vw);
        height: min(380px, 44vw);
        background: var(--p-emerald-300);
        opacity: 0.2;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 55%, #fff 96%);
    }
}

// 第一屏
.sec-first {
    display: flex;
    height: var(--section-first-height);
    margin: var(--section-first-margin) 0;
    padding: 0 18px;
    flex-direction: var(--section-display);
    justify-content: var(--section-justify);
    align-items: var(--section-align);
    gap: 48px;

    .left {
        display: flex;
        width: 55%;
        min-width: var(--title-min-width);
        flex-direction: column;

        h1 {
            font-family: 'Fira Code Variable', monospace;
            margin: 0;
            font-size: var(--title-font-size);
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            color: var(--p-text-color);
        }

        .accent {
            color: var(--p-emerald-600);
        }

        .cursor {
            display: inline-block;
            height: var(--title-cursor-height);
            width: 24px;
            margin-left: 0.15em;
            background-color: var(--p-text-color);
            animation: blink 1s infinite;
        }
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-top: 1.25em;

        a {
            line-height: 2;
            padding-left: 0.5em;
            font-weight: 500;
            transition: all 0.2s ease;

            i {
                font-size: 15px;
                transform: translateX(-1px) translateY(1px);
                transition: transform 0.2s;
            }

            &:hover i {
                transform: translateX(1px);
            }
        }
    }

    .right {
        max-width: 380px;

        p {
            margin: 0;
            font-size: 17px;
            font-weight: 400;
            color: var(--p-text-muted-color);
            letter-spacing: 0.5px;
            line-height: 2;
        }
    }
}

// 光标动画
@keyframes blink {
    0%,
    49% {
        visibility: visible;
    }

    50%,
    100% {
        visibility: hidden;
    }
}

@media screen and (max-width: 1000px) {
    .home {
        --section-display: column;
        --section-justify: center;
        --section-align: flex-start;
        --section-first-height: 80vh;
        --title-font-size: 56px;
        --title-cursor-height: 7px;
        --title-min-width: 0;
    }

    .sec-first {
        .left {
            width: 100%;
        }

        .right {
            margin-top: 0;
            max-width: none;
        }
    }
}
</style>
