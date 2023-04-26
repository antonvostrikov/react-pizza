import React from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

interface IPizza {
  imageUrl: string;
  id: string;
  name: string;
}

const PizzaItem: React.FC = () => {
  const { id } = useParams()
  const [pizza, setPizza] = React.useState<IPizza>()

  React.useEffect(() => {
    async function getPizza() {
      try {
        const { data } = await axios.get('http://localhost:3001/pizzas/' + id)
        setPizza(data)
      } catch (e) {
        console.log(e)
      }
    }

    getPizza()
  }, [])

  if (!pizza) {
    return <>Загрузка...</>
  }

  return (
    <>
      <img src={pizza.imageUrl} />
      <span>{pizza.id}</span>
      <h2>{pizza.name}</h2>
    </>
  )
}

export default PizzaItem