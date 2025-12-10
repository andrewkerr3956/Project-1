import Image, { ImageProps } from "next/image";

interface NewsHeadlineItemProps {
    title: string;
    caption: string;
    imageProps: ImageProps;
}

export default function NewsHeadlineItem(props: NewsHeadlineItemProps) {
    const { title, caption, imageProps } = props;

    return (
        <div className="flex w-full gap-6">
            <Image width={180} height={0} {...imageProps} />
            <div>
                <div className="text-xl font-semibold">{title}</div>
                <p>{caption}</p>
            </div>
        </div>
    )
}