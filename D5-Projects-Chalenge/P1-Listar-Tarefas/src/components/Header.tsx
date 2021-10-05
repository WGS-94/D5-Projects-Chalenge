

interface Props {
  name: string;
  age: number
}

export default function Header({ name, age}: Props) {
  return (
    <div>
      <header>
        <h1>Olá..... {name} ok? my age is {age} </h1>
      </header>
    </div>
  )
}
