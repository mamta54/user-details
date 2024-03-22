import classes from './User.module.css';
export const dummyUser = [
  {
      id: 1,
      name: "ram",
      email: "ram@gmail.com"
  },
  {
      id: 2,
      name: "krishna",
      email: "krishna@gmail.com"
  }
]

function User() {

    function userClickHandler() {
      //path for userDetails
    }

  return (
    <>
    { dummyUser.map((el) => <h1 onClick={userClickHandler} className={classes.users} key={el.id}>{el.name}</h1>) }
    </>
  )
}

export default User