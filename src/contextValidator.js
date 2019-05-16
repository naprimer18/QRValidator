
import React from "react";

const ValidatorContext = React.createContext( {returnErrorPoint: () => {}});

export const ValidatorProvider = ValidatorContext.Provider;
export const ValidatorConsumer = ValidatorContext.Consumer;