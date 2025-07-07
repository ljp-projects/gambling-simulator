{
    (async () => {
        const generateRandomAccountId = (): string => {
            return `${(Math.random() + 1).toString(36).substring(7)}-${(Math.random() + 1).toString(36).substring(9)}-${(Math.random() + 1).toString(36).substring(9)}-${(Math.random() + 1).toString(36).substring(5)}`
        }

        interface Card {
            number: number
            locked: number
            cvc: number
            expiry: number
        }

        enum CreditWorthiness {
            Dunno,
            NeverGiveThisPersonALoanOrCreditCard,
            MaybeYouCanHaveACreditCardButNoLoans,
            MaybeYouCanHaveALoanOrCreditCardWithHigherInterest,
            MaybeYouCanHaveALoanOrACreditCard,
            YouCanProbablyHaveALoanOrCreditCard,
            YouCanHaveALoanOrCreditCardButInterestIsHigher,
            WowYouCanHaveAllTheLoanAndCreditCards,
        }

        class You {
            static #you: You = new You();

            static get shared(): You {
                return You.#you
            }

            private creditWorthiness = CreditWorthiness.Dunno
            private debt: number = 0;
        }

        class CreditCard {}

        class BankAccount {
            static #instance: BankAccount = new BankAccount()

            static get shared(): BankAccount {
                return BankAccount.#instance
            }

            private balance: number = 0
            private linkedCard: Card | null = null
            private readonly id: string = generateRandomAccountId()
            private creditLimit: number = 750
            private interestRatePA: number = 19.99
            private minimumCreditLimit: number = 500

            public readonly primaryCardholder: You = You.shared
        }
    })()
}