# HabitLab 变更记录

格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)

---

## [1.0.0] - 2026-04-18

### 新增
- **首页** (`index.html`)：Hero 区、关键数字、核心概念介绍、精选文章、CTA
- **文章库** (`articles.html`)：20 篇文章，支持分类筛选（认知篇/方法论篇/研究解读/实践案例）
- **文章详情** (`articles/*.html`)：20 篇完整文章页面
- **实验室** (`lab.html`)：复利计算器 + 习惯匹配器入口
- **复利计算器** (`lab/compound-calculator.html`)：输入天数/改进幅度，计算复利效果
- **习惯匹配器** (`lab/habit-selector.html`)：4 题问卷匹配个性化微习惯推荐
- **关于页** (`about.html`)
- **习惯数据库** (`data/habits.json`)：65 个习惯，8 大类

### 设计
- 配色：Wellness Purple (#7C3AED) + Green (#10B981)
- 字体：Lora (serif) + Raleway (sans)，Google Fonts
- 品牌：HabitLab，紫绿渐变 Logo 🧪
- 响应式覆盖：768px / 480px / 360px / 横屏模式

### 技术栈
- 纯静态 HTML + CSS + JavaScript，无框架依赖
- Vercel 部署配置（`vercel.json`，cleanUrls + trailingSlash）
- GitHub 仓库：https://github.com/guolei3927/habitlab

### 修复
- 移动端菜单展开被导航栏遮挡：修正 `.nav-links` 的 `top` 计算，移除多余的 `safe-top`
- 移动端菜单动画改用 `opacity/visibility/transform` transition，解决 `display:none/flex` 切换的渲染时序问题
- 菜单面板添加底部安全区 padding，防止 iPhone 底部横条遮挡最后一个菜单项
- JS 滚动锁定同时控制 `html` 和 `body`，提升微信 WebView 兼容性

---

## 文章清单

### 认知篇 (5篇)
| 文件 | 标题 |
|------|------|
| the-power-of-micro-habits.html | 微习惯的复利效应 |
| willpower-trap.html | 意志力的陷阱：为什么越努力越失败 |
| elephant-and-rider.html | 你不是懒，是系统卡了 |
| knowing-vs-doing.html | 为什么"知道"和"做到"之间隔着一个银河系 |
| body-compound-effect.html | 你正在给自己种一棵"习惯之树" |

### 方法论篇 (5篇)
| 文件 | 标题 |
|------|------|
| design-first-micro-habit.html | 如何设计你的第一个微习惯 |
| habit-environment-design.html | 打造习惯环境：让好习惯"自动发生" |
| habit-stacking.html | 习惯叠加术：把新习惯"粘"在旧习惯上 |
| identity-based-habits.html | 身份认同法：不是"我做不到"，是"我还没开始" |
| habit-tracking-psychology.html | 看见进步，才能持续进步 |

### 研究解读 (5篇)
| 文件 | 标题 |
|------|------|
| lancet-sleep-study.html | 柳叶刀研究解读：每天多睡5分钟的真相 |
| 66-day-habit-study.html | 21天是谣传，66天才是真相 |
| intermittent-exercise-study.html | 碎片运动的秘密：5分钟广播体操 |
| social-contagion-study.html | 你的习惯会被朋友"传染" |
| sleep-debt-study.html | 睡眠负债的真相：欠下的觉都是要还的 |

### 实践案例 (5篇)
| 文件 | 标题 |
|------|------|
| programmer-2min-experiment.html | 真实案例：程序员的"2分钟实验" |
| 996-morning-habits.html | 996打工人的晨间微习惯 |
| mom-fragment-habits.html | 带娃妈妈的碎片微习惯 |
| exam-prep-focus-habits.html | 考研党的专注力实验 |
| senior-health-reversal.html | 退休老人的健康逆转 |

---

## 项目结构

```
habitflow.cc/
├── index.html                    # 首页
├── articles.html                 # 文章库列表
├── lab.html                      # 实验室入口
├── about.html                    # 关于页
├── vercel.json                   # Vercel 部署配置
├── css/
│   └── style.css                 # 全局样式（533行）
├── js/
│   └── main.js                   # 全局 JS（导航、菜单、滚动动画、分类筛选）
├── data/
│   └── habits.json               # 习惯数据库（65个习惯，8大类）
├── articles/                     # 20 篇文章详情页
│   ├── the-power-of-micro-habits.html
│   ├── willpower-trap.html
│   ├── elephant-and-rider.html
│   ├── knowing-vs-doing.html
│   ├── body-compound-effect.html
│   ├── design-first-micro-habit.html
│   ├── habit-environment-design.html
│   ├── habit-stacking.html
│   ├── identity-based-habits.html
│   ├── habit-tracking-psychology.html
│   ├── lancet-sleep-study.html
│   ├── 66-day-habit-study.html
│   ├── intermittent-exercise-study.html
│   ├── social-contagion-study.html
│   ├── sleep-debt-study.html
│   ├── programmer-2min-experiment.html
│   ├── 996-morning-habits.html
│   ├── mom-fragment-habits.html
│   ├── exam-prep-focus-habits.html
│   └── senior-health-reversal.html
├── lab/
│   ├── compound-calculator.html  # 复利计算器
│   └── habit-selector.html       # 习惯匹配器
└── CHANGELOG.md                  # 本文件
```
