import { UniformRichText, UniformText } from "@uniformdev/canvas-react";

const resolveParameterComponent = ({ parameterId, parameterType, mapping }) => {
  if (!mapping) {
    return null;
  }

  const { as, ...rest } = mapping;

  if (parameterType === "text") {
    return <UniformText parameterId={parameterId} as={as} {...rest} />;
  } else if (parameterType === "richText") {
    return <UniformRichText parameterId={parameterId} as={as} {...rest} />;
  }

  console.warn(`Unsupported parameter type: ${parameterType}`);
  return null;
};

export const UniformWrapper = ({
  resolvedComponent,
  parameterMappings,
  children,
  ...rest
}) => {
  // iterate through parameters which have been mapped
  const remappedProps = Object.entries(parameterMappings ?? {}).reduce(
    (acc, [key, value]) => {
      // cast our value to a ParameterMapping
      const parameterMapping = value;

      // if the parameterId is set, use it, otherwise use the key
      // this allows you to map a prop to a different parameter
      const parameterId = parameterMapping?.parameterId ?? key;

      // get the parameter definition from the component
      const parameterDefinition = component.parameters?.[parameterId];

      // if the parameter definition is not found, return the accumulator
      // should only happen if the parameterId is not found in the component
      if (!parameterDefinition) {
        return acc;
      }

      // resolve the parameter component
      const parameterComponent = resolveParameterComponent({
        parameterId: key,
        parameterType: parameterDefinition.type,
        mapping: parameterMapping,
        component,
        context,
      });

      // if the parameter component is found, add it to the accumulator
      if (parameterComponent) {
        acc[key] = parameterComponent;
      }

      return acc;
    },
    {}
  );

  const ResolvedComponent = resolvedComponent;

  // create the props for the resolved component
  // use remappedProps to override the unresolved parameter props
  const props = {
    component: component,
    ...rest,
    ...remappedProps,
    children,
  };

  return <ResolvedComponent {...props} />;
};
