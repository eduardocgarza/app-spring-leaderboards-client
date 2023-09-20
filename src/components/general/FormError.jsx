import React from "react";

export default function FormError(props) {
  const { error } = props;
  if (!error) return null;
  return (
    <section className="py-8 text-red-500 text-sm font-medium mt-2 text-center">
      {error}
    </section>
  );
}
