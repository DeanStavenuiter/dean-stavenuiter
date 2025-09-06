import TextPressure from "@/components/TextPressure";

export default function Home() {
  return (
    <div className="h-screen w-full ">
      <TextPressure 
        text={["dean", "stav", "enui", "ter."]}
        fontFamily="Compressa VF"
        fontUrl="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2"
        width={true}
        weight={true}
        italic={true}
        alpha={false}
        flex={true}
        stroke={false}
        scale={true}
        textColor="#FFFFFF"
        strokeColor="#FF0000"
        className="text-2xl font-bold"
        minFontSize={16}
      />
    </div>
  );
}
