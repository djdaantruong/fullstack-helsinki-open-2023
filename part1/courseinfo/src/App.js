const App = () => {
  const course = {
    name: 'Half Stack application development',
    contents: [
      {
        part: 'Fundamentals of React',
        exercises: 10,
      },
      {
        part: 'Using props to pass data',
        exercises: 7,
      },
      {
        part: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content course={course.contents} />
      <Total course={course.contents} />
    </div>
  )
}

const Header = (header) => {
  return <h1>{header.course}</h1>
}

const Content = (contents) => {
  return (
    <>
      <p>
        {contents.course[0].part} {contents.course[0].exercises}
      </p>
      <p>
        {contents.course[1].part} {contents.course[1].exercises}
      </p>
      <p>
        {contents.course[2].part} {contents.course[2].exercises}
      </p>
    </>
  )
}

const Total = (total) => {
  return (
    <p>
      Number of exercises{' '}
      {total.course[0].exercises +
        total.course[1].exercises +
        total.course[2].exercises}
    </p>
  )
}

export default App
