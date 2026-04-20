type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    centered?: boolean;
};

export function SectionHeading({
    eyebrow,
    title,
    centered = false,
}: SectionHeadingProps) {
    return (
        <div className={centered ? "text-center" : ""}>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#8d8175]">
                {eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[#2f2925] md:text-5xl">
                {title}
            </h2>
        </div>
    );
}