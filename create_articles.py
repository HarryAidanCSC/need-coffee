# %%
import os
import json
import random
import shutil
import random

random.seed(42)


def generate_10_digit_uuid():
    return str(random.randint(10**9, 10**10 - 1))


def read_article_dir(article_dir, dest_dir):
    files = os.listdir(article_dir)
    json_file = next((f for f in files if f.endswith(".json")), None)
    md_file = next((f for f in files if f.endswith(".md")), None)
    jpg_file = next(
        (
            f
            for f in files
            if f.lower().endswith(".jpg")
            or f.lower().endswith(".jpeg")
            or f.lower().endswith(".png")
            or f.lower().endswith(".webp")
        ),
        None,
    )

    if not (json_file and md_file and jpg_file):
        return None

    # Copy image to public
    src_img_path = os.path.join(article_dir, jpg_file)
    dest_img_path = os.path.join(dest_dir, jpg_file)
    shutil.copy(src_img_path, dest_img_path)

    with open(os.path.join(article_dir, json_file), "r", encoding="utf-8") as f:
        json_data = json.load(f)
    with open(os.path.join(article_dir, md_file), "r", encoding="utf-8") as f:
        md_data = f.read()
    jpg_file_name = f"Articles/{jpg_file}"

    return {
        **json_data,
        "markdownText": md_data,
        "jpgFileName": jpg_file_name,
        "uuid": generate_10_digit_uuid(),
    }


def combine_all_articles(root_dir, dest_dir):
    articles = []
    for name in os.listdir(root_dir):
        dir_path = os.path.join(root_dir, name)
        if os.path.isdir(dir_path):
            article = read_article_dir(dir_path, dest_dir)
            if article:
                articles.append(article)
    return articles


if __name__ == "__main__":
    dest_dir = os.path.join("public", "Articles")
    articles_root = os.path.join("src", "data", "Articles")
    os.makedirs(dest_dir, exist_ok=True)
    all_articles = combine_all_articles(articles_root, dest_dir)
    with open(os.path.join(dest_dir, "all_articles.json"), "w", encoding="utf-8") as f:
        json.dump(all_articles, f, ensure_ascii=False, indent=2)
    print(
        f"Combined {len(all_articles)} articles and wrote to public/Articles/all_articles.json."
    )
