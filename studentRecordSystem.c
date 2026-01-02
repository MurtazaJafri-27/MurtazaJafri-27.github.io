#include<stdio.h>

struct studentRecord {
    char name[30];
    int rollNo;
    float marks[3];
    float totalMarks;
};

int main()
{
    struct studentRecord students[5];

    for(int i =1; i<=5; i++){
        printf("Name %d : ", i);
        scanf("%s", &students[i].name);
        printf("Roll No. : ");
        scanf("%d", &students[i].rollNo);
        for(int j = 1; j<=3; j++){
            printf("Enter your %d marks: ", j);
            scanf("%f", &students[i].marks[j]);
        }
        printf("\nYour total marks are: %.2f\n", students[i].marks[1] + students[i].marks[2] + students[3].marks[2]);
    }
}