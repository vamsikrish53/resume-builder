export class Experience {
    private employerName: string;
    private jobTitle: string;
    private city: string;
    private startDate: string;
    private endDate: string;
    private description: string;

    constructor(employerName: string, jobTitle: string, city: string, startDate: string, endDate: string, description: string) {
        this.employerName = employerName;
        this.jobTitle = jobTitle;
        this.city = city;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
    }

    public getEmployerName(): string {
        return this.employerName;
    }

    public getjobTitle(): string {
        return this.jobTitle;
    }

    public getCity(): string {
        return this.city;
    }

    public getStartDate(): string {
        return this.startDate;
    }

    public getEndDate(): string {
        return this.endDate;
    }

    public getDescription(): string {
        return this.description;
    }
}