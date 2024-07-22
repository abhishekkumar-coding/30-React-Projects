import React, { useState } from "react";

function ImageUploader() {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    const selectFile = e.target.files[0];
    console.log(selectFile);
    setFile(selectFile);
  };

  return (
    <div className="">
      <input type="file" accept="image/*" onChange={handleFile} />
      {file && <img src={URL.createObjectURL(file)} alt="File Uploaded" />}
    </div>
  );
}

export default ImageUploader;
