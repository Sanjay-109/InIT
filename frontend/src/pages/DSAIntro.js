
import React from 'react';
import { Link } from 'react-router-dom';

function OSIntro() {
  return (
    <><div className="App">
          <section>
              <h2>1. What is Object Oriented Programming (OOPs)?</h2>
              <p>
                  Object Oriented Programming (also known as OOPs) is a programming paradigm where the complete software operates as a bunch of objects talking to each other. An object is a collection of data and the methods which operate on that data.
              </p>
          </section>
          <section>
              <h2>2. Why OOPS?</h2>
              <p>
                  The main advantage of OOP is better manageable code that covers the following:
                  The overall understanding of the software is increased as the distance between the language spoken by developers and that spoken by users.
                  Object orientation eases maintenance by the use of encapsulation.  One can easily change the underlying representation by keeping the methods the same.
                  The OOPs paradigm is mainly useful for relatively big software.
              </p>
          </section>
          <section>
              <h2>3. What is a Class?</h2>
              <p>
                  A class is a building block of Object Oriented Programs. It is a user-defined data type that contains the data members and member functions that operate on the data members. It is like a blueprint or template of objects having common properties and methods.
              </p>
          </section>
          <section>
              <h2>4. What is an Object?</h2>
              <p>
                  An object is an instance of a class. Data members and methods of a class cannot be used directly. We need to create an object (or instance) of the class to use them. In simple terms, they are the actual world entities that have a state and behavior.
              </p>
          </section>
          <section>
              <h2>5. What are the main features of OOPs?</h2>
              <p>
                  <li>Encapsulation</li>
                  <li>Data Abstraction</li>
                  <li>Polymorphism</li>
                  <li>Inheritance</li>
              </p>
          </section>
          <section>
              <h2>6.  What is Encapsulation?</h2>
              <p>
                  Encapsulation is the binding of data and methods that manipulate them into a single unit such that the sensitive data is hidden from the users
                  It is implemented as the processes mentioned below:

                  Data hiding: A language feature to restrict access to members of an object. For example, private and protected members in C++.
                  Bundling of data and methods together: Data and methods that operate on that data are bundled together. For example, the data members and member methods that operate on them are wrapped into a single unit known as a class.
              </p>
          </section>
          <section>
              <h2>7. What is Abstraction?</h2>
              <p>
                  Abstraction is similar to data encapsulation and is very important in OOP. It means showing only the necessary information and hiding the other irrelevant information from the user. Abstraction is implemented using classes and interfaces.
              </p>
          </section>
          <section>
              <h2>8. What is Polymorphism?</h2>
              <p>
                  The word “Polymorphism” means having many forms. It is the property of some code to behave differently for different contexts. For example, in C++ language, we can define multiple functions having the same name but different working depending on the context.

                  Polymorphism can be classified into two types based on the time when the call to the object or function is resolved. They are as follows:

                  A. Compile Time Polymorphism
                  B. Runtime Polymorphism

                  A) Compile-Time Polymorphism

                  Compile time polymorphism, also known as static polymorphism or early binding is the type of polymorphism where the binding of the call to its code is done at the compile time. Method overloading or operator overloading are examples of compile-time polymorphism.

                  B) Runtime Polymorphism

                  Also known as dynamic polymorphism or late binding, runtime polymorphism is the type of polymorphism where the actual implementation of the function is determined during the runtime or execution. Method overriding is an example of this method.

              </p>
          </section>
          <section>
              <h2>9. What is Inheritance? What is its purpose?</h2>
              <p>
                  The idea of inheritance is simple, a class is derived from another class and uses data and implementation of that other class. The class which is derived is called child or derived or subclass and the class from which the child class is derived is called parent or base or superclass.

                  The main purpose of Inheritance is to increase code reusability. It is also used to achieve Runtime Polymorphism.
              </p>
          </section>
          <section>
              <h2>10. What are access specifiers? What is their significance in OOPs?</h2>
              <p>
                  Access specifiers are special types of keywords that are used to specify or control the accessibility of entities like classes, methods, and so on. Private, Public, and Protected are examples of access specifiers or access modifiers.
                  The key components of OOPs, encapsulation and data hiding, are largely achieved because of these access specifiers.
              </p>
          </section>
          <section>
              <h2>11. Menyion the adavnatges and disadvantages of oops!</h2>
              <table> <tr> <th>Advantages of OOPs</th> <th>Disadvantages of OOPs</th> </tr> <tr> <td>OOPs provides enhanced code reusability.</td> <td>The programmer should be well-skilled and should have excellent thinking in terms of objects as everything is treated as an object in OOPs.</td> </tr> <tr> <td>The code is easier to maintain and update.</td> <td>Proper planning is required because OOPs is a little bit tricky.</td> </tr> <tr> <td>It provides better data security by restricting data access and avoiding unnecessary exposure.</td> <td>OOPs concept is not suitable for all kinds of problems.</td> </tr> <tr> <td>Fast to implement and easy to redesign resulting in minimizing the complexity of an overall program.</td> <td>The length of the programs is much larger in comparison to the procedural approach.</td> </tr> </table>
          </section>
          <section>
              <h2>12.  What are some commonly used Object Oriented Programming Languages?</h2>
              <p>
                  OOPs paradigm is one of the most popular programming paradigms. It is widely used in many popular programming languages such as:
                  <ul>
                      <li>C++</li>
                      <li>Java</li>
                      <li>Python</li>
                      <li>Javascript</li>
                      <li>C#</li>
                      <li>Ruby</li>
                  </ul>
              </p>
          </section>

          <section>
              <h2>13. What are the different types of Polymorphism?</h2>
              <p>
                  Polymorphism can be classified into two types based on the time when the call to the object or function is resolved. They are as follows:
                  <b>Types of Polymorphism</b>
                  <ol type="A">
                      <li>Compile-Time Polymorphism
                          <p>Compile time polymorphism, also known as static polymorphism or early binding is the type of polymorphism where the binding of the call to its code is done at the compile time. Method overloading or operator overloading are examples of compile-time polymorphism.</p>
                      </li>
                      <li>Runtime Polymorphism
                          <p>Also known as dynamic polymorphism or late binding, runtime polymorphism is the type of polymorphism where the actual implementation of the function is determined during the runtime or execution. Method overriding is an example of this method.</p>
                      </li>
                  </ol>
              </p>
          </section>

          <section>
              <h2>14. What is the difference between overloading and overriding?</h2>
              <p>
                  A compile-time polymorphism feature called overloading allows an entity to have numerous implementations of the same name. Method overloading and operator overloading are two examples.
                  <br>
                      Overriding, on the other hand, is a form of runtime polymorphism where an entity with the same name but a different implementation is executed. It is implemented with the help of virtual functions.
                  </></p>
          </section>

          <section>
              <h2>15. Are there any limitations on Inheritance?</h2>
              <p>
                  Yes, there are limitations when it comes to inheritance. Although inheritance is a powerful OOPs feature, it also has significant drawbacks:
                  <ul>
                      <li>It takes longer to process as it must pass through several classes to be implemented.</li>
                      <li>The base class and the child class, which are both engaged in inheritance, are also closely related to one another (called tightly coupled). Therefore, if changes need to be made, they may need to be made in both classes at the same time.</li>
                      <li>Implementing inheritance might be difficult as well. Therefore, if not implemented correctly, this could result in unforeseen mistakes or inaccurate outputs.</li>
                  </ul>
              </p>
          </section>

          <section>
              <h2>16. What different types of inheritance are there?</h2>
              <p>
                  Inheritance can be classified into 5 types which are as follows:
                  <b>Types of inheritance</b>
                  <ol type="A">
                      <li>Single Inheritance: Child class derived directly from the base class</li>
                      <li>Multiple Inheritance: Child class derived from multiple base classes.</li>
                      <li>Multilevel Inheritance: Child class derived from the class which is also derived from another base class.</li>
                      <li>Hierarchical Inheritance: Multiple child classes derived from a single base class.</li>
                      <li>Hybrid Inheritance: Inheritance consisting of multiple inheritance types of the above specified.</li>
                  </ol>
              </p>
          </section>
          <section>
              <h2>17. What is an interface?</h2>
              <p>
                  A unique class type known as an interface contains methods but not their definitions. Inside an interface, only method declaration is permitted. You cannot create objects using an interface. Instead, you must implement that interface and define the methods.
              </p>
          </section>

          <section>
              <h2>18. How is an abstract class different from an interface?</h2>
              <p>
                  Both abstract classes and interfaces are special types of classes that only include the declaration of the methods, not their implementation. However, an abstract class is distinct from an interface. Here are some key differences:
                  <table>
                      <tr>
                          <td><strong>Abstract Class</strong></td>
                          <td><strong>Interface</strong></td>
                      </tr>
                      <tr>
                          <td>When an abstract class is inherited, the subclass is not required to provide the definition of the abstract method unless the subclass utilizes it.</td>
                          <td>When an interface is implemented, the subclass must provide all methods of the interface along with their implementation.</td>

                      </tr>
                      <tr>
                          <td>An abstract class can have both abstract and non-abstract methods.</td>
                          <td>An interface can only have abstract methods.</td>
                      </tr>
                      <tr>
                          <td>An abstract class can have final, non-final, static, and non-static variables.</td>
                          <td>The interface can only have static and final variables.</td>
                      </tr>
                      <tr>
                          <td>Abstract class doesn’t support multiple inheritance.</td>
                          <td>An interface supports multiple inheritance.</td>
                      </tr>
                  </table>
              </p>
          </section>

          <section>
              <h2>19. How much memory does a class occupy?</h2>
              <p>
                  Classes do not occupy memory. They act as templates for creating objects. The objects, when created, initialize the class members and methods, utilizing memory.
              </p>
          </section>

          <section>
              <h2>20. Is it always necessary to create objects from a class?</h2>
              <p>
                  No, it is not always necessary to create objects from a class. If the class contains non-static methods, an object needs to be instantiated. However, for classes with static methods, objects need not be created. You can directly call static methods using the class name.
              </p>
          </section>

          <section>
              <h2>21. What is the difference between a structure and a class in C++?</h2>
              <p>
                  The structure and class in C++ have the following differences:
                  <ul>
                      <li>By default, members of a structure are public, while they are private in a class.</li>
                      <li>Struct is used to declare a structure, and class is used to declare a class in C++.</li>
                  </ul>
              </p>
          </section>

          <section>
              <h2>22. What is a Constructor?</h2>
              <p>
                  A constructor is a block of code that initializes the newly created object. It is not a method as it doesn't have a return type. It often has the same name as the class, like in C++ and Java, or a specific name like __init__ in Python.
                  <br>
                      Example:
                      <pre>
                          class Student {String} name;
                          String surname;
                          int rollNo;
                          Student() {cout << "constructor is called"};
                          }
                          }
                      </pre>
                  </></p>
          </section>

          <section>
              <h2>23. What are the various types of constructors in C++?</h2>
              <p>
                  The types of constructors in C++ include:
                  <ol>
                      <li>Default Constructor: Initializes data members to default values.</li>
                      <li>Non-Parameterized Constructor: User-defined constructor without arguments.</li>
                      <li>Parameterized Constructor.</li>
                      <li>Copy Constructor.</li>
                  </ol>
              </p>
          </section>
          <section>
              <h2>24. What is a destructor?</h2>
              <p>
                  A destructor is a method that is automatically called when the object goes out of scope or is destroyed. In C++, the destructor has the same name as the class but with the (~) tilde symbol as a prefix. In Java, due to automatic garbage collection, destructors are not explicitly used.
                  <br>
                      Example:
                      <pre>
                          class base {public}:
                          ~base() {cout << "This is a destructor"}; 
                      </pre>
                  </></p>
          </section>

          <section>
              <h2>25. Can we overload the constructor in a class?</h2>
              <p>
                  Yes, constructors can be overloaded in a class. The default constructor, parameterized constructor, and copy constructor are examples of constructor overloading.
              </p>
          </section>

          <section>
              <h2>26. Can we overload the destructor in a class?</h2>
              <p>
                  No, a destructor cannot be overloaded in a class. There can only be one destructor present in a class.
              </p>
          </section>

          <section>
              <h2>27. What is a virtual function?</h2>
              <p>
                  A virtual function is used for method overriding in derived classes, providing abstraction and runtime polymorphism. In C++, it is declared using the virtual keyword, while in Java, all non-static and non-final methods are virtual functions.
                  <br>
                      Example:
                      <pre>
                          class base {virtual} void print() {cout << "This is a virtual function"};
                          }
                          }
                      </pre>
                  </></p>
          </section>

          <section>
              <h2>28. What is a pure virtual function?</h2>
              <p>
                  A pure virtual function, also known as an abstract function, is a member function without any implementation. It must be defined in derived classes. In Python, this concept can be implemented using @abstractmethod from the ABC module.
                  <br>
                      Example:
                      <pre>
                          class base {virtual} void pureVirFunc() = 0;
                      </pre>
                  </p>
          </section>
          <section>
              <h2>29. What is the use of ‘finalize’?</h2>
              <p>
                  The `finalize` method is used to free unmanaged resources and perform cleanup before Garbage Collection (GC). It helps in memory management tasks.
              </p>
          </section>

          <section>
              <h2>30. What is Garbage Collection(GC)?</h2>
              <p>
                  Garbage Collection (GC) is a memory reclamation mechanism found in programming languages like C# and Java. It includes GC engines that automatically release reserved memory space for objects that are no longer in use by the application.
              </p>
          </section>

          <section>
              <h2>31. What is a final variable?</h2>
              <p>
                  A final variable can only be explicitly initialized once. If a reference variable is marked as final, the reference cannot be changed to point to another object. However, the data within the object can be modified.
              </p>
          </section>

          <section>
              <h2>32. What is an exception?</h2>
              <p>
                  An exception is a message that interrupts normal program execution to indicate an issue. It is transferred to an exception handler to resolve. The program's state is saved at the time the exception is raised.
              </p>
          </section>

          <section>
              <h2>33. What is exception handling?</h2>
              <p>
                  Exception handling is a crucial concept in Object-Oriented Programming used to manage errors. It involves throwing errors and catching them to resolve issues.
              </p>
          </section>

          <section>
              <h2>34. What is the difference between an error and an exception?</h2>
              <p>
                  An error is a serious issue that should not be caught, while an exception is an issue that can be caught and handled within the program.
              </p>
          </section>

          <section>
              <h2>35. What is a try/ catch block?</h2>
              <p>
                  The `try` block is where exceptions from coding or data mistakes are managed during the program's execution. Exceptions are caught and handled in the `catch` block.
              </p>
          </section>

          <section>
              <h2>36. What is a finally block?</h2>
              <p>
                  The `finally` block is the section of code associated with the `try` block. It contains code that is always executed before the method concludes, regardless of whether an exception is thrown or caught.
              </p>
          </section>

          <section>
              <h2>37. Can you call the base class method without creating an instance?</h2>
              <p>
                  Yes, it is possible to call the base class method without instantiating it under the condition that it is a static method and the base class is inherited by some other subclass.
              </p>
          </section>
          <section>
              <h2>39. What is the difference between OOP and SOP?</h2>
              <p>
                  The main difference between object-oriented programming (OOP) and structured programming (SOP) is that SOP focuses on using functions or modules to build programs, while OOP revolves around creating programs using objects and their interactions.
                  <ul>
                      <li><strong>Object-Oriented Programming (OOP):</strong> Involves objects and classes, providing encapsulation and abstraction. Ex: Java Programming.</li>
                      <li><strong>Structured Programming (SOP):</strong> Involves functions and structures. Ex: C Programming.</li>
                  </ul>
              </p>
          </section>

          <section>
              <h2>40. What is the difference between a class and an object?</h2>
              <p>
                  An object represents a real-world entity with specific properties and behaviors. Objects of the same type with similar characteristics are grouped as a class. A class is a blueprint of objects, while an object is an instance of a class.
              </p>
          </section>

          <section>
              <h2>41. What are 'access specifiers'?</h2>
              <p>
                  Access specifiers are keywords in programming languages used to define the accessibility behavior of classes, methods, interfaces, and variables. Common access specifiers in C++ are public, private, and protected.
              </p>
          </section>

          <section>
              <h2>42. Can you create an instance of an abstract class?</h2>
              <p>
                  No, it is not possible to create an instance of an abstract class. Abstract classes contain abstract methods that need to be implemented by another class that extends the abstract class. Objects can then be created from the implementing class.
              </p>
          </section>
          <section>
              <h2>43. What is an interface?</h2>
              <p>
                  An interface is a user-defined data type that consists of abstract methods. A class implements an interface and inherits its abstract methods, where a class describes object's attributes and behaviors, while an interface contains behaviors that a class implements. The class signifies "how," and the interface signifies "what."
              </p>
          </section>

          <section>
              <h2>44. What are pure virtual functions?</h2>
              <p>
                  A pure virtual function is a method without implementation provided in the base class, serving as a declaration only. It can have its implementation in the derived class; otherwise, the derived class is also considered abstract.
              </p>
          </section>

          <section>
              <h2>45. Differentiate between a class and a method.</h2>
              <p>
                  A class is a blueprint of objects, defining their properties and behaviors, while a method is a programming construct that performs specific tasks or behaviors.
              </p>
          </section>

          <section>
              <h2>46. Differentiate between an abstract class and an interface?</h2>
              <p>
                  An interface contains only abstract methods, while an abstract class can have both abstract and non-abstract methods. Abstract classes are used when some implementation is known, while the interface is used when only the requirement specification is known.
              </p>
          </section>

          <section>
              <h2>47. What are the limitations of OOPs?</h2>
              <p>
                  The limitations of OOPs include larger program size, slower execution, limited suitability for all types of problems, and higher testing time for OOP solutions.
              </p>
          </section>

          <section>
              <h2>48. What are the characteristics of an abstract class?</h2>
              p>
              An abstract class contains at least one pure virtual function, cannot be instantiated, but object references can be created, and can have non-abstract as well as pure virtual functions.
          </p>
      </section>
      <section>
              <h2>49. What is constructor chaining?</h2>
              <p>
                  Constructor chaining refers to the practice of calling one constructor from another with respect to a current object reference. It can be achieved using the "this" keyword within the current class or the "super" keyword to call the constructor from the base class.
              </p>
          </section><section>
              <h2>50. What is Cohesion in OOP?</h2>
              <p>
                  The modules having well-defined and specific functionality are called cohesion.

                  Advantages

                  It improves the maintainability and reusability of code.
              </p>
          </section><section>
              <h2>51. What are the levels of data abstraction?</h2>
              <p>
                  Highlighting the set of services by hiding internal implementation details is called abstraction.

                  By using abstract Class and interface, we can implement abstraction
              </p>
          </section>
          <section>
              <h2>52. What are the types of variables in OOP?</h2>
              <p>
                  Variables are basic units to store data in RAM for Java programs.

                  Variables should be declared before using them in Java programming. Variable initialization can be static or dynamic. The syntax for variable declaration and static initialization is: –

                  Types of variables

                  <b>Primitive Variables:</b>  It is used to represent primitive values like int, float, etc.
                  <b>Reference Variables:</b> It is used to refer to objects in Java.
                  <b>Instance Variables:</b> Variables whose value varied from object to object are instance variables. For every object, a separate copy of the instance variable is created. Instance variables are declared within the Class and outside any method/block/constructor
                  <b>Static variables:</b> For static Variables, a single copy of the variable is created, and that copy is shared between every Class object. The static variable is created during class loading and destroyed at class unloading.
                  Static variables can be accessed directly from the static and instance area. We are not required to perform initialization explicitly for static variables, and JVM will provide default values.
                  <b>Local Variables:</b>  Variables declared inside a method or block or constructor are local variables. Hence the scope of local variables is the same as the block’s scope in which we declared that variable.
                  JVM doesn’t provide default values, and before using that variable, the initialization should be performed explicitly.
              </p>
          </section><section>
              <h2>53.  Implement an abstract class in C# with an abstract method.</h2>
              <p>
                  abstract class Shape
                  {public} abstract double CalculateArea();
                  

                  class Circle : Shape
                  {private} double radius;

                  public Circle(double radius)
                  {this.radius = radius};
                  

                  public override double CalculateArea()
                  { }
                  return Math.PI * radius * radius;
              </p>
          </section>
          <section>
              <h2>54. Implement a Singleton class in Java.</h2>
              <p>
                  public class Singleton {private} static Singleton instance;

                  private Singleton() {
                      // Private constructor to prevent instantiation.
                  }

                  public static Singleton getInstance() { }
                  if (instance == null) {synchronized(Singleton.class)} { }
                  if (instance == null) {instance = new Singleton()};

                  return instance;
              </p>
          </section><section>
              <h2>55. Define Framework?</h2>
              <p>
                  A framework can be defined as a code structure in which generic functionality is provided by software that can be selectively replaced by additional user-written code to provide application-specific software.
              </p>
          </section><section>
              <h2>56. Explain Software Re-engineering.</h2>
              <p>
                  Software re-engineering is a process of software development that is executed to improve the maintainability of a software system. Re-engineering defines examination and modification for the reconstitution of the system in a new form.
              </p>
          </section><section>
              <h2>57. What is the difference between a base class and a superclass?</h2>
              <p>
                  The base class is the root class- the most generalized class. At the same time, the superclass is the immediate parent class from which the other class inherits.
              </p>
          </section><section>
              <h2>58. What are virtual functions?</h2>
              <p>
                  Virtual functions are functions that are present in the parent class and are overridden by the subclass. These functions are used to achieve runtime polymorphism.
              </p>
          </section><section>
              <h2>59. What are pure virtual functions?</h2>
              <p>
                  Pure virtual functions or abstract functions are functions that are only declared in the base class. This means that they do not contain any definition in the base class and need to be redefined in the subclass.
              </p>
          </section><section>
              <h2>60. Difference between an error and exception</h2>
              <p>
                  What is the difference between an error and an exception?
                  Errors are problems that should not be encountered by applications while exceptions are conditions that an application might try to catch
              </p>
              </section>
    </div>
);
}

export default OOPSIntro;
 
      