const userName: string = 'ahmed'
const age: number = 28
const active: boolean = true

const names: string[] = ['ahmed']

names.push('ali')
//names.push(5);

type USER_TYPE = {
	name: string;
	age: number;
	active: boolean;
	phone?: string;
};

let user: USER_TYPE;

user = {
  name: 'ahmed',
  age: 30,
  active: true,
  phone: '0134234234'
}


function printUser(userData: USER_TYPE) {
  console.log(userData)
}

printUser({
  name: 'ali',
  age: 34,
  active: false,
  phone: '3789573985'
})

