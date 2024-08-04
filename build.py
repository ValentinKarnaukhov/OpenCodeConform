import os
import shutil

source_folder = "language"
destination_folder = "open-code-conform-site/docs"


def clean_destination(dest):
    if os.path.exists(dest):
        shutil.rmtree(dest)
    os.makedirs(dest)


def copy_files(src, dest):
    for root, dirs, files in os.walk(src):
        for file in files:
            if file.endswith("_en.md") or file == "_category_.json":
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(root, src)
                relative_path_parts = relative_path.split(os.sep)
                if "code_style" in relative_path_parts:
                    relative_path_parts.remove("code_style")
                if "framework" in relative_path_parts:
                    relative_path_parts.remove("framework")
                cleaned_relative_path = os.path.join(*relative_path_parts)
                dest_dir = os.path.join(dest, cleaned_relative_path)
                os.makedirs(dest_dir, exist_ok=True)
                shutil.copy(file_path, dest_dir)
                print(f"Copied {file_path} to {dest_dir}")


clean_destination(destination_folder)
copy_files(source_folder, destination_folder)
