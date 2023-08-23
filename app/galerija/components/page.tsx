"use client";
import React, { useState } from "react";
export default async function Image() {
  const [file, setFile] = useState<File | undefined>();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/galerija/upload", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (e: any) {
      console.error(e);
    }
  };
  return (
    <div style={{ paddingTop: "30vh" }}>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => {
            setFile(e.target.files?.[0]);
          }}
        />
        <input type="submit" value={"upload"} />
      </form>
    </div>
  );
}
