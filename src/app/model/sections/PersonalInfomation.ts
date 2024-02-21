export class PersonalInformation {
    private name: string;
    private jobTitle: string;
    private email: string;
    private phoneNumber: string;
    private location: string;
    private summary: string;

    constructor(name: string, jobTitle: string, email: string, phoneNumber: string, location: string, summary: string) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.location = location;
        this.summary = summary;
    }

    public getName(): string {
        return this.name;
    }

    public getjobTitle(): string {
        return this.jobTitle;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public getLocation(): string {
        return this.location;
    }

    public getSummary(): string {
        return this.summary;
    }

}