// Notes:

// 1) Still trying to figure out what happens with the type system
// when I try with something more than 20 people as input.

#include <stdio.h>

unsigned long long factorial(int n)
{
  if (n == 0)
    return 1;
  else
    return (n * factorial(n - 1));
}

unsigned long long calcNumberOfGreetings(int numberOfPeople)
{
  // Combination of n people taken 2 at a time without repetition.
  return factorial(numberOfPeople) / (factorial(2) * factorial(numberOfPeople - 2));
}

int main()
{
  int numberOfPeople;
  unsigned long long numberOfGreetings;

  printf("Quantas pessoas há na festa? ");
  scanf("%d", &numberOfPeople);

  numberOfGreetings = calcNumberOfGreetings(numberOfPeople);

  printf("\nHouveram %llu cumprimentos.\n", numberOfGreetings);
  return 0;
}
