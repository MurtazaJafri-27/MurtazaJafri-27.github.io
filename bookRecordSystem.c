#include<stdio.h>
#include<string.h>
#include<ctype.h>

struct bookRecordSystem {
    int bookId;
    char title[30];
    char author[30];
    float price;
    int quantity;
};


int main()
{
    struct bookRecordSystem books[3];
    int budget;

    printf("\nWhat is your budget? : ");
    scanf("%d", &budget);

    printf("-----INPUT BOOK LIBRARY-----");
    for(int i = 1; i<=2; i++){
        printf("\nBook ID : ");
        scanf("%d", &books[i].bookId);
        getchar();

        printf("\nTitle : ");
        fgets(books[i].title, sizeof(books[i].title), stdin);
        books[i].title[strcspn(books[i].title, "\n")] = '\0';

        printf("\nAuthor : ");
        fgets(books[i].author, sizeof(books[i].author) , stdin);
        books[i].author[strcspn(books[i].author, "\n")] = '\0';

        printf("\nPrice : ");
        scanf("%f", &books[i].price);

        printf("\nQuantity : ");
        scanf("%d", &books[i].quantity);
        getchar();
    }
    printf("\n----------\n");

    char bookName[30];
    char yesOrNo[10];
    int flag = 1;
while(flag != 0){
    printf("Which book are you looking for?\n");
    fgets(bookName, sizeof(bookName), stdin);
    bookName[strcspn(bookName, "\n")] = '\0';

    for(int j = 1; j<=3; j++){
        if(strcmp(bookName, books[j].title) == 0){
            printf("\nBook ID : %d", books[j].bookId);
            printf("\nTitle : %s", books[j].title);
            printf("\nAuthor : %s", books[j].author);
            printf("\nPrice : %f", books[j].price);
            printf("\nQuantity : %d", books[j].quantity);

            printf("\nDo you want to buy this book? : ");
            fgets(yesOrNo, sizeof(yesOrNo), stdin);
            yesOrNo[strcspn(yesOrNo, "\n")] = '\0';

            int promptLength = strlen(yesOrNo);
            for(int k = 0; k<=promptLength; k++){
                yesOrNo[k] = tolower(yesOrNo[k]);
            }

            if(strcmp(yesOrNo, "yes") == 0 && books[j].price <= budget && books[j].quantity > 0)
            {
                books[j].quantity -= 1;
                printf("\nPURCHASE SUCCESSFUL!");
                printf("\nQuantity of Books Left : %d", books[j].quantity);
                budget -= books[j].price;
                printf("\nYour Budget now is : %d", budget);

                printf("\nDo you want to buy another one? : ");
                fgets(yesOrNo, sizeof(yesOrNo), stdin);
                yesOrNo[strcspn(yesOrNo, "\n")] = '\0';

                promptLength = strlen(yesOrNo);
                for(int l = 0; l<=promptLength; l++){
                    yesOrNo[l] = tolower(yesOrNo[l]);
                }
                if(strcmp(yesOrNo, "yes") == 0){
                    flag = 1;
                }
                else{
                    flag = 0;
                }
            }
            else if(budget < books[j].price){
                printf("TOO EXPENSIVE!\n");
                printf("\nDo you want to continue? : ");
                fgets(yesOrNo, sizeof(yesOrNo), stdin);
                yesOrNo[strcspn(yesOrNo, "\n")] = '\0';

                promptLength = strlen(yesOrNo);
                for(int o = 0; o<=promptLength; o++){
                    yesOrNo[o] = tolower(yesOrNo[o]);
                }

                if(strcmp(yesOrNo, "yes") == 0){
                    flag = 1;
                }
                else {
                    flag = 0;
                }
            }
            }
        }
    }
}
