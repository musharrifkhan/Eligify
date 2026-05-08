export const filterSchemes = (
  schemes,
  answers
) => {
  let filtered = [...schemes];

  // Occupation based filtering
  if (answers.occupation === "Student") {
    filtered = filtered.filter(
      (scheme) =>
        scheme.category === "Education"
    );
  }

  if (answers.occupation === "Farmer") {
    filtered = filtered.filter(
      (scheme) =>
        scheme.category === "Agriculture"
    );
  }

  if (answers.occupation === "Worker") {
    filtered = filtered.filter(
      (scheme) =>
        scheme.category === "Employment"
    );
  }

  // Female category support
  if (answers.gender === "Female") {
    const femaleSchemes = schemes.filter(
      (scheme) =>
        scheme.category === "Women & Child"
    );

    filtered = [
      ...filtered,
      ...femaleSchemes,
    ];
  }

  // Remove duplicates
  filtered = filtered.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (item) => item.id === value.id
      )
  );

  return filtered;
};