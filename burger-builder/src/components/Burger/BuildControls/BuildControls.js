import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={styles.BuildControls}>
    <p>
      {" "}
      Current Price: $<span className={styles.price}>{props.price}</span>
    </p>
    {controls.map(ctrl => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingedientAdded(ctrl.type)}
          removed={() => props.ingedientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      );
    })}
    <button
      onClick={props.ordered}
      className={styles.OrderButton}
      disabled={!props.purchasable}
    >
      {" "}
      ORDER NOW{" "}
    </button>
  </div>
);

export default buildControls;
