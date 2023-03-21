export const JavaReverse = {
    code:`
    public class ReverseArray {  
        public static void main(String[] args) {  
            //Initialize array  
            int [] arr = new int [] {1, 2, 3, 4, 5};  
            System.out.println("Original array: ");  
            for (int i = 0; i < arr.length; i++) {  
                System.out.print(arr[i] + " ");  
            }  
            System.out.println();  
            System.out.println("Array in reverse order: ");  
            //Loop through the array in reverse order  
            for (int i = arr.length-1; i >= 0; i--) {  
                System.out.print(arr[i] + " ");  
            }  
        }  
    } `,
output:` 
Original array: 
1	2   3   4   5
Array in reverse order:
5    4   3   2   1`
};

export const CAReverse = {
    code:`
#include<stdio.h>  
int main()  
{  
    int n, arr[n], i;  
    printf("Enter the size of the array: ");  
    scanf("%d", &n);  
    printf("Enter the elements: ");  
    for(i = 0; i < n; i++)  
    {  
        scanf("%d", &arr[i]);  
    }  
    int rev[n], j = 0;  
    for(i = n-1; i >= 0; i--)  
    {  
        rev[j] = arr[i];  
        j++;  
    }  
    printf("The Reversed array: ");  
    for(i = 0; i < n; i++)  
    {  
        printf("%d ", rev[i]);  
    }  
}  
    `,
    output:`
    Enter the size of the array: 5
    Enter the elements: 1 2 3 4 5
    The Reversed array: 5 4 3 2 1
    `,
    input:'10 10'
}

export const CPlusPlusReverse = {
    code:`
#include <iostream>  
using namespace std;  
  
int main ()  
{  
    int arr[50], num, temp, i, j;  
    cout << " Please, enter the total no. you want to enter: ";  
    cin >> num;  
      
    // use for loop to enter the numbers   
    for (i = 0; i < num; i++)  
    {  
        cout << " Enter the element " << i+1 << ": ";  
        cin >> arr[i];  
    }  
      
      
    for ( i = 0, j = num - 1; i < num/2; i++, j--)  
    {     
        temp = arr[i];  
        arr[i] = arr[j];  
        arr[j] = temp;  
    }  
    cout << "\n Reverse all elements of the array: " << endl;  
    // use for loop to print the reverse array  
    for ( i = 0; i < num; i++)  
    {  
        cout << arr[i] << " ";  
    }  
    return 0;  
}
    `,
    output:`
 Please, enter the total no. you want to enter: 6
 Enter the element 1: 78
 Enter the element 2: 12
 Enter the element 3: 54
 Enter the element 4: 24
 Enter the element 5: 7
 Enter the element 6: 90

 Reverse all elements of the array:
90 7 24 54 12 78
    `,
    input:'10 10'
};

export const PythonReverse = {
    code:`
#Initialize array     
arr = [1, 2, 3, 4, 5];     
print("Original array: ");    
for i in range(0, len(arr)):    
    print(arr[i]),     
print("Array in reverse order: ");    
#Loop through the array in reverse order    
for i in range(len(arr)-1, -1, -1):     
    print(arr[i]),  
    `,
    output:`
Original array: 
1	2   3   4   5
Array in reverse order:
5    4   3   2   1`
}
;

export const JavscriptReverse = {
    code:`
    function ReverseNewArr(arr){
        let first = 0;
        let last = arr.length-1;
    
        while(first < last){
            var temp = arr[first];
            arr[first] = arr[last];
            arr[last] = temp;
            first++;
            last--;
        }
    
        return arr;
    }
    let newArr = [1,2,3,4,5,6,7];
    console.log(ReverseNewArr(newArr));
    `,
    output:'[7,6,5,4,3,2,1]'
};