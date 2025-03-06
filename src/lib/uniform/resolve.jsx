import { DefaultNotImplementedComponent } from "@uniformdev/canvas-react";
import * as mappings from "./mappings";
import { UniformWrapper } from "./uniformWrapper";

export const resolveComponent = ({ type }) => {
  let result = {
    component: DefaultNotImplementedComponent,
  };

  const keys = Object.keys(mappings);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const mapping = mappings[key];
    if (mapping?.type === type) {
      result = mapping;
      break;
    }
  }

  console.log({ result });

  return (
    <UniformWrapper
      resolvedComponent={result.component}
      parameterMappings={result.parameters}
      children={result.children}
    />
  );
};
