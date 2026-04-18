# HabitLab 开发与部署指南

## 项目信息

- **品牌名称**：HabitLab（健康微习惯实验室）
- **项目路径**：`/Users/lei/WorkBuddy/20260418061904/habitflow.cc/`
- **GitHub**：https://github.com/guolei3927/habitlab
- **部署平台**：Vercel（自动部署，关联 GitHub 仓库）
- **技术栈**：纯 HTML + CSS + JavaScript，无构建工具

## 日常开发工作流

### 1. 本地开发
```bash
cd /Users/lei/WorkBuddy/20260418061904/habitflow.cc
python3 -m http.server 3456
# 访问 http://localhost:3456
```

### 2. 修改代码后提交并部署
```bash
cd /Users/lei/WorkBuddy/20260418061904/habitflow.cc

# 查看改了什么
git status

# 添加所有修改
git add -A

# 提交（写清楚改了什么）
git commit -m "fix: 描述修改内容"

# 推送到 GitHub（推送后 Vercel 自动部署）
git push origin main
```

### 3. 提交规范
建议使用约定式提交格式：
- `feat: 新功能描述`
- `fix: 修复描述`
- `style: 样式调整`
- `content: 新增/修改文章内容`
- `chore: 杂项（配置、文档等）`

## 文件结构说明

| 文件/目录 | 用途 |
|-----------|------|
| `index.html` | 首页 |
| `articles.html` | 文章库列表页（含分类筛选） |
| `lab.html` | 实验室入口页 |
| `about.html` | 关于页 |
| `css/style.css` | 全局样式（唯一 CSS 文件） |
| `js/main.js` | 全局 JS（导航菜单、滚动动画、分类筛选） |
| `data/habits.json` | 习惯匹配器的习惯数据库 |
| `articles/*.html` | 20 篇文章详情页 |
| `lab/compound-calculator.html` | 复利计算器 |
| `lab/habit-selector.html` | 习惯匹配器 |
| `vercel.json` | Vercel 部署配置 |
| `CHANGELOG.md` | 版本变更记录 |

## 新增文章流程

1. 在 `articles/` 目录下创建新的 HTML 文件
2. 参照现有文章（如 `the-power-of-micro-habits.html`）的模板结构
3. 在 `articles.html` 的 `article-list` 中添加对应卡片
4. 根据分类设置 `data-cat` 属性：`cognition` / `method` / `research` / `case`
5. 根据分类设置标签样式（参考现有文章的 `article-card-tag` 内联样式）
6. 本地预览确认无误后 `git add -A && git commit -m "content: 新增文章《标题》" && git push`

## 样式修改指南

- 所有样式集中在 `css/style.css` 一个文件
- 移动端菜单相关：搜索 `.nav-links`、`.nav-overlay`、`.nav-hamburger`
- 文章详情页样式：搜索 `.article-detail`
- 响应式断点：`@media (max-width: 768px)` / `480px` / `360px`
- 安全区域：`--safe-top` / `--safe-bottom`（iPhone 刘海/底部横条适配）

## 版本管理

- 版本记录见 `CHANGELOG.md`
- 每次提交时用 `git log --oneline` 查看历史
- `git tag v1.0.0` 可打标签标记重要版本

## GitHub 用户信息

- 用户名：guolei3927
- 邮箱：guolei3927@gmail.com
