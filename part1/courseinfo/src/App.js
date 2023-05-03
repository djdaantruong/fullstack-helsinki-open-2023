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
      <Part
        part={contents.course[0].part}
        exercises={contents.course[0].exercises}
      />
      <Part
        part={contents.course[1].part}
        exercises={contents.course[1].exercises}
      />
      <Part
        part={contents.course[2].part}
        exercises={contents.course[2].exercises}
      />
    </>
  )
}

const Part = (content) => {
  return (
    <p>
      {content.part} {content.exercises}
    </p>
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
