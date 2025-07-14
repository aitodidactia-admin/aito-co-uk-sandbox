import { removeBackground, loadImageFromSrc } from './backgroundRemoval';
import featuredStamp from "@/assets/featured-stamp-transparent.png";

export const processStampImage = async (): Promise<string> => {
  try {
    // Load the original image
    const image = await loadImageFromSrc(featuredStamp);
    
    // Remove background
    const blob = await removeBackground(image);
    
    // Convert blob to data URL
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error processing stamp image:', error);
    // Return original image as fallback
    return featuredStamp;
  }
};