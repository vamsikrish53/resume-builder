export class ProfileSummary {
    private summary: string;

    constructor(summary: string) {
        this.summary = summary;
    }

    public getSummary(): string {
        return this.summary;
    }

}