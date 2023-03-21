export const JavaAddition = {
    code:`
public class SumOfNumbers1  
{  
public static void main(String args[])   
{  
int n1 = 225, n2 = 115, sum;  
sum = n1 + n2;  
System.out.println("The sum of numbers is: "+sum);  
}  
}`,
output:'The sum of numbers is :340'
};

export const CAddition = {
    code:`
    #include <stdio.h>
    int main() {    
    
        int number1, number2, sum;
        
        printf("Enter two integers: ");
        scanf("%d %d", &number1, &number2);
    
        // calculate the sum
        sum = number1 + number2;      
        
        printf("%d + %d = %d", number1, number2, sum);
        return 0;
    }`,
    output:'Enter two integers: 10 + 10 = 20',
    input:'10 10'
};

export const CPlusPlusAddition = {
    code:`
    #include <iostream>
    using namespace std;
    
    int main() {
    
      int first_number, second_number, sum;
        
      cout << "Enter two integers: ";
      cin >> first_number >> second_number;
    
      // sum of two numbers in stored in variable sumOfTwoNumbers
      sum = first_number + second_number;
    
      // prints sum 
      cout << first_number << " + " <<  second_number << " = " << sum;     
    
      return 0;
    }`,
    output:'Enter two integers: 10 + 10 = 20',
    input:'10 10'
};

export const PythonAddition = {
    code:`
# This program adds two numbers

num1 = 1.5
num2 = 6.3

# Add two numbers
sum = num1 + num2

# Display the sum
print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))
    `,
    output:"The sum of 1.5 and 6.3 is 7.8"

}
;

export const JavscriptAddition = {
    code:`
const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
    `,
    output:'The sum of 5 and 3 is: 8'
};