export interface ServiceDescriptionProps {
    title: string;
    description?: string;
}

export default function ServiceDescription({ title, description }: ServiceDescriptionProps) {
    return (
        <div className="flex flex-col items-center w-full border border-white rounded-full py-5 text-center leading-[1.2]">
            <p className="font-bold uppercase">{title}</p>
            {description && <p className="mt-2 mb-3 font-medium">{description}</p>}
        </div>
    );
}