import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDir = path.join(process.cwd(), 'staticDatas/blog');

const skillDir = path.join(process.cwd(), 'staticDatas/skill');

/** 获取所有博文 */
export function getSortedPostsData() {
    const fileNames = fs.readdirSync(blogDir);
    const allPostData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(blogDir, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContent);
        return {
            id,
            ...matterResult.data,
        };
    });
    return allPostData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(blogDir);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id) {
    const fullPath = path.join(blogDir, `${id}.md`);
    const isExist = fs.existsSync(fullPath);
    if (!isExist) {
        return {
            id: '文章不存在',
            contentHtml: null,
            status: 404,
        };
    }
    const fileContent = await fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContent);
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        id,
        contentHtml,
        status: 200,
        ...matterResult.data,
    };
}

/** 获取技能 */
export async function getSkills() {
    const fullPath = path.join(skillDir, `skill.json`);
    const fileContent = await fs.readFileSync(fullPath, 'utf8');
    return {
        skills: JSON.parse(fileContent),
    };
}
