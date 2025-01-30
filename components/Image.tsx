import * as React from "react";
import { AspectRatio, AspectRatioProps } from "@radix-ui/react-aspect-ratio";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface ImageProps {
  imageProps: Omit<NextImageProps, "fill">;
  aspecRatioProps: AspectRatioProps;
}

export const Image: React.FC<ImageProps> = ({
  aspecRatioProps,
  imageProps: { className, ...imageProps },
}) => (
  <AspectRatio {...aspecRatioProps}>
    <NextImage
      className={cn("!object-cover !w-full !h-full", className)}
      fill={true}
      {...imageProps}
    />
  </AspectRatio>
);
