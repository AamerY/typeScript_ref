type LeftType = {
    id: number
    left: string
  }
  
  type RightType = {
    id: number
    right: string
  }
  
  type IntersectionType = LeftType & RightType
  
  function showType(args: IntersectionType) {
    console.log(args)
  }
  
  showType({ id: 1, left: "test", right: "test" })
  // Output: {id: 1, left: "test", right: "test"}
////////////////////////////////////////////////////
  type UnionType = string | number

function showType1(arg: UnionType) {
  console.log(arg)
}

showType1("test")
// Output: test

showType1(7)
// Output: 7
////////////////////////////////////////////////////
function showType2<T>(args: T) {
    console.log(args)
  }
  
  showType2("test")
  // Output: "test"
  
  showType2(1)
  // Output: 1
  //////////////////////////////////////////////////
  interface GenericType<T> {
    id: number
    name: T
  }
  
  function showType3(args: GenericType<string>) {
    console.log(args)
  }
  
  showType3({ id: 1, name: "test" })
  // Output: {id: 1, name: "test"}
  
  function showTypeTwo(args: GenericType<number>) {
    console.log(args)
  }
  
  showTypeTwo({ id: 1, name: 4 })
  // Output: {id: 1, name: 4}
  /////////////////////////////////////////////////////////
  interface GenericType1<T, U> {
    id: T
    name: U
  }
  
  function showType4(args: GenericType1<number, string>) {
    console.log(args)
  }
  
  showType4({ id: 1, name: "test" })
  // Output: {id: 1, name: "test"}
  
  function showTypeTwo2(args: GenericType1<string, string[]>) {
    console.log(args)
  }
  
  showTypeTwo2({ id: "001", name: ["This", "is", "a", "Test"] })
  // Output: {id: "001", name: Array["This", "is", "a", "Test"]}
  ///////////////////////////////////////////////////////////////
  interface PartialType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showType5(args: Partial<PartialType>) {
    console.log(args)
  }
  
  showType5({ id: 1 })
  // Output: {id: 1}
  
  showType5({ firstName: "John", lastName: "Doe" })
  // Output: {firstName: "John", lastName: "Doe"}
/////////////////////////////////////////////////////////
interface RequiredType {
    id: number
    firstName?: string
    lastName?: string
  }
  
  function showType6(args: Required<RequiredType>) {
    console.log(args)
  }
  
  showType6({ id: 1, firstName: "John", lastName: "Doe" })
  // Output: { id: 1, firstName: "John", lastName: "Doe" }
  
  //showType6({ id: 1 })
  // Error: Type '{ id: number: }' is missing the following properties from type 'Required<RequiredType>': firstName, lastName
  //////////////////////////////////////////////////////////
  interface ReadonlyType {
    id: number
    name: string
  }
  
  function showType7(args: Readonly<ReadonlyType>) {
   // args.id = 4
    console.log(args)
  }
  
  showType7({ id: 1, name: "Doe" })
  // Error: Cannot assign to 'id' because it is a read-only property.
  ////////////////////////////////////////////////////////////////
  interface PickType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showType8(args: Pick<PickType, "firstName" | "lastName">) {
    console.log(args)
  }
  
  showType8({ firstName: "John", lastName: "Doe" })
  // Output: {firstName: "John"}
  
 // showType8({ id: 3 })
  // Error: Object literal may only specify known properties, and 'id' does not exist in type 'Pick<PickType, "firstName" | "lastName">'
/////////////////////////////////////////////////////
interface PickType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showType9(args: Omit<PickType, "firstName" | "lastName">) {
    console.log(args)
  }
  
  showType9({ id: 7 })
  // Output: {id: 7}
  
  //showType9({ firstName: "John" })
  // Error: Object literal may only specify known properties, and 'firstName' does not exist in type 'Pick<PickType, "id">'
  ///////////////////////////////////////////////////////////////////////
  interface FirstType {
    id: number
    firstName: string
    lastName: string
  }
  
  interface SecondType {
    id: number
    address: string
    city: string
  }
  
  type ExtractType = Extract<keyof FirstType, keyof SecondType>
  // Output: "id"
  type ExcludeType = Exclude<keyof FirstType, keyof SecondType>
  // Output; "firstName" | "lastName"
  /////////////////////////////////////////////////////////////
  interface EmployeeType {
    id: number
    fullname: string
    role: string
  }
  
  let employees: Record<number, EmployeeType> = {
    0: { id: 1, fullname: "John Doe", role: "Designer" },
    1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
    2: { id: 3, fullname: "Sara Duckson", role: "Developer" },
  }
  
  // 0: { id: 1, fullname: "John Doe", role: "Designer" },
  // 1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
  // 2: { id: 3, fullname: "Sara Duckson", role: "Developer" }
  //////////////////////////////////////////////////////////////
  type NonNullableType = string | number | null | undefined

function showType10(args: NonNullable<NonNullableType>) {
  console.log(args)
}

showType10("test")
// Output: "test"

showType10(1)
// Output: 1

//showType(null)
// Error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

//showType(undefined)
// Error: Argument of type 'undefined' is not assignable to parameter of type 'string | number'.
///////////////////////////////////////////////////////////////
type StringMap<T> = {
    [P in keyof T]: string
  }
  
  function showType11(arg: StringMap<{ id: number; name: string }>) {
    console.log(arg)
  }
  
  //showType11({ id: 1, name: "Test" })
  // Error: Type 'number' is not assignable to type 'string'.
  
  showType11({ id: "testId", name: "This is a Test" })
  // Output: {id: "testId", name: "This is a Test"}
///////////////////////////////////////////////////////////
function showType12(x: number | string) {
    if (typeof x === "number") {
      return `The result is ${x + x}`
    }
    throw new Error(`This operation can't be done on a ${typeof x}`)
  }
  
  showType12("I'm not a number")
  // Error: This operation can't be done on a string
  
  showType12(7)
  // Output: The result is 14
  ///////////////////////////////////////////////////
  class Foo {
    bar() {
      return "Hello World"
    }
  }
  
  class Bar {
    baz = "123"
  }
  
  function showType13(arg: Foo | Bar) {
    if (arg instanceof Foo) {
      console.log(arg.bar())
      return arg.bar()
    }
  
    throw new Error("The type is not supported")
  }
  
  showType13(new Foo())
  // Output: Hello World
  
  showType13(new Bar())
  // Error: The type is not supported
  ////////////////////////////////////////////////////////
  interface FirstType {
    x: number
  }
  interface SecondType {
    y: string
  }
  
  function showType14(arg: FirstType | SecondType) {
    if ("x" in arg) {
      console.log(`The property ${arg.x} exists`)
      return `The property ${arg.x} exists`
    }
    throw new Error("This type is not expected")
  }
  
  //showType14({ x: 7 })
  // Output: The property 7 exists
  
  //showType14({ y: "ccc" })
  // Error: This type is not expected
  ////////////////////////////////////////////////////
