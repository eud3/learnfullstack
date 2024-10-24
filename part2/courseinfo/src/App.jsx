const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => {
  return parts.map(part => <Part key={part.id} part={part} />)
}

const Course = ({ course }) => (
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }

  const sum = course.parts.reduce((acc, curr) => acc + curr.exercises)
  console.log(sum)

  return (
    <>
      <Course course={course} />
      <Total sum={sum} />
    </>
  )
}

export default App
