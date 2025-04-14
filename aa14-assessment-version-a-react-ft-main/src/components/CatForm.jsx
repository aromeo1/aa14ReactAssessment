import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const COLORS = [
  "yellow",
  "orange",
  "white",
  "black",
  "brown",
  "gray"
];

function CatForm() {
  const [name, setName] = useState(""); // Controlled input for name
  const [age, setAge] = useState(0); // Controlled input for age
  const [color, setColor] = useState(COLORS[1]); // Controlled input for color (orange)
  
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    color: ""
  });
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form values to the console
    console.log({ name, age: String(age), color });
    // Navigate to the home page
    navigate("/");
  };

  useEffect(() => {
    let nameError = "";
    if (!name.trim()) {
      nameError = "Name field is required";
    } else if (name.length > 30) {
      nameError = "Name must be fewer than 30 characters";
    }

    let ageError = "";
    if (age < 0 || age > 30) {
      ageError = "Age must be between 0 and 30";
    }

    setErrors({
      name: nameError,
      age: ageError,
      color: ""
    });
  }, [name, age]);

  // Determine if the form is valid
  const isFormValid = !errors.name && !errors.age;

  return (
    <form onSubmit={handleSubmit} className="cat-form">
      <h2>Create a Cat</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="errors">{errors.name}</p>}
      </label>
      <label>
        Select a Color
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Age
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <p className="errors">{errors.age}</p>}
      </label>
      <button type="submit" disabled={!isFormValid}>
        Create Cat
      </button>
    </form>
  );
}

export default CatForm;