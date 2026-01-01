export function Footer() {
    return (
        <footer className="py-8 bg-background border-t border-border">
            <div className="container px-4 text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Reliance Trading Corporation. All rights reserved.</p>
                <p className="mt-2 text-xs opacity-50">Steel Distributors & Alloy Steel Dealers</p>
            </div>
        </footer>
    );
}
