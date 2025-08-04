import { safetyTip } from "@/data"

const SafetyTip = () => {
  const safeTypeColor = {
    "Ergonomic Safety": "bg-[#ecb1ec]",
    "Professional & Legal Safety": "bg-[#FFF8E3]",
    "Patient Handling & General Physical Safety": "bg-[#B8DBFF]",
    "Mental Health & Psychological Safety": "bg-[#F9EDED]",
    "Radiation & Equipment Safety": "bg-[#f2dacc]",
    "Infection Control & Hygiene Safety": "bg-[#D0FAD0]",
  }

  return (
    <div className='shadow-subtle w-full h-full text-[13px] font-medium justify-between bg-white text-black-100 py-[24px] rounded-radius-200'>
      <div className='pb-[14px] border-b-[1px] border-b-border-gray-100 relative px-[24px] flex items-center justify-between'>
        <div>
          <p className='text-[16px]'>Safety Tip & Trends</p>
        </div>
        <div className='absolute top-0 left-0 z-0 h-[25px] bg-custom-blue-100 w-[2.5px] rounded-l-0 rounded-[10px]' />
      </div>

      {/* safety tip */}
      <div className='mt-6 px-4'>
        {safetyTip.map((tip, index) => (
          <div className='flex items-center gap-2 mb-4' key={index}>
            <div
              className={`h-[30px] w-[30px] flex items-center justify-center rounded-full ${
                safeTypeColor[tip.safetyType]
              }`}
            >
              <img src={tip.icon} alt='safety tip' />
            </div>
            <p>{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SafetyTip
