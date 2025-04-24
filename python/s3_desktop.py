import tkinter as tk
from tkinter import filedialog, messagebox
import boto3

class S3App:
    def __init__(self, root):
        self.root = root
        self.root.title("S3 Desktop App")
        self.s3 = boto3.client('s3')
        self.bucket = 'amplify-storagebrowser-mc-luisprojects3bucket44ede-dozqwbpz3u2v'  # Confirmed bucket

        tk.Button(root, text="Upload File", command=self.upload_file).pack()
        tk.Button(root, text="List Files", command=self.list_files).pack()

    def upload_file(self):
        file_path = filedialog.askopenfilename()
        if file_path:
            file_name = file_path.split('/')[-1]
            self.s3.upload_file(file_path, self.bucket, f"public/{file_name}")
            messagebox.showinfo("Success", f"Uploaded {file_name}")

    def list_files(self):
        response = self.s3.list_objects_v2(Bucket=self.bucket, Prefix='public/')
        files = [obj['Key'] for obj in response.get('Contents', [])]
        messagebox.showinfo("Files", "\n".join(files))

if __name__ == "__main__":
    root = tk.Tk()
    app = S3App(root)
    root.mainloop()