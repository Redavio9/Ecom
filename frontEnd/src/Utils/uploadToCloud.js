const cloud_name = "solix";
const uploadPreset = "myapi99";

export const uploadToCloud = async (pics, fileTye) => {
    if(pics && fileTye)
    {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", uploadPreset);
        data.append("cloud_name", cloud_name);
        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${cloud_name}/${fileTye}/upload`,
            {
            method: "POST",
            body: data,
            }
        );
        console.log("res", res);
        const finalRes = await res.json();
        console.log("res json", finalRes);
        return finalRes.url;
    }
    else
    {
        console.log("No image found");
        return "";
    }
    
    }

reda
    
