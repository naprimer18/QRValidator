
import React from "react";

const ValidatorContext = React.createContext( {dataError: {}});

export const ValidatorProvider = ValidatorContext.Provider;
export const ValidatorConsumer = ValidatorContext.Consumer;