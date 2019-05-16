
import React from "react";

const ValidatorContext = React.createContext( {returnErrorPoint: () => {},  theme: {color:"red"}});

export const ValidatorProvider = ValidatorContext.Provider;
export const ValidatorConsumer = ValidatorContext.Consumer;