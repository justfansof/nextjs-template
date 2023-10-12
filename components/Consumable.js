export default function Consumable(props) {
  return (
    <>
      <div className="consumable flex-1 p-4">
        <a className="flex flex-col items-center justify-between" href={(props.link)}>
          <img
            src={props.src} 
            alt={props.alt}
          />
          <h4 className="text-lg font-black text-center">{props.title}</h4>
        </a>
      </div>
    </>
  )
}
