import { Dropzone } from "@/components/modules/dropzone/Dropzone";
import { useState } from "react";

export const UploadPage = () => {
  const [img, setImg] = useState<string | undefined>(undefined);

  return (
    <div>
      <Dropzone img={img} setImg={setImg} />
    </div>
  );
};
