import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { useEffect } from "react";

function ImgGen() {
  const [imgUrl, setImgUrl] = useState();
  const configuration = new Configuration({
    apiKey: "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"
  });
  const openai = new OpenAIApi(configuration);

  const generateImg = async () => {
    try {
      const imgData = await openai.createImage({
        prompt: "a dog in space",
        n: 1,
        size: "1024x1024"
      });

      const dataURL = imgData.data.data[0].url;
      setImgUrl(dataURL);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    generateImg();
  }, []);
  return <>{imgUrl ? <img src={imgUrl} alt="" /> : null}</>;
}

export default ImgGen;
