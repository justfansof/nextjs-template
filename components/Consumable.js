import Text from '@components/Text'

export default function Consumable(props) {
  return (
    <>
      <div className="consumable flex-1 p-4">
        <a className="flex flex-col items-center justify-between" href={(props.link)}>
          <img
            src={props.src} 
            alt={props.alt}
          />
          <Text 
            type="h4"
            text={props.title}
          />
        </a>
      </div>
    </>
  )
}
