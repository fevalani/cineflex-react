import { Link } from "react-router-dom";

import BottomBar from "./BottomBar";

export default function Seat() {
  return (
    <>
      <div className="seats-title">Selecione o(s) assento(s)</div>
      <div className="seats-container">
        <SeatsMap />
        <ExampleSeat />
        <InputCustomerData />
        <Link to="/sucesso">
          <button className="button-default">Reservar assento(s)</button>
        </Link>
      </div>
      <BottomBar imageURL={""} filmName={""} sessionHour={""} />
    </>
  );
}

function SeatsMap() {
  return (
    <ul className="seats-map">
      <li className="seat select" onCLick={() => console.log("aqui")}>
        01
      </li>
      <li className="seat unavailable" onCLick={() => console.log("aqui")}>
        02
      </li>
      <li className="seat select" onCLick={() => console.log("aqui")}>
        03
      </li>
      <li className="seat" onCLick={() => console.log("aqui")}>
        04
      </li>
      <li className="seat select" onCLick={() => console.log("aqui")}>
        05
      </li>
      <li className="seat unavailable" onCLick={() => console.log("aqui")}>
        06
      </li>
      <li className="seat unavailable" onCLick={() => console.log("aqui")}>
        07
      </li>
      <li className="seat" onCLick={() => console.log("aqui")}>
        08
      </li>
      <li className="seat select" onCLick={() => console.log("aqui")}>
        09
      </li>
      <li className="seat" onCLick={() => console.log("aqui")}>
        10
      </li>
    </ul>
  );
}

function ExampleSeat() {
  return (
    <ul className="seats-example">
      <li>
        <div className="seat select"></div>
        <div>Selecionado</div>
      </li>
      <li>
        <div className="seat"></div>
        <div>Disponível</div>
      </li>
      <li>
        <div className="seat unavailable"></div>
        <div>Indisponível</div>
      </li>
    </ul>
  );
}

function InputCustomerData() {
  return (
    <>
      <div className="data-input">
        <span>Nome do comprador:</span>
        <input type="text" placeholder="Digite seu nome..."></input>
      </div>
      <div className="data-input">
        <span>CPF do comprador:</span>
        <input type="text" placeholder="Digite seu CPF..."></input>
      </div>
    </>
  );
}
